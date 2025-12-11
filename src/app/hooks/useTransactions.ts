// src/hooks/useTransactions.ts
import useSWR from "swr";
import Papa from "papaparse";

// ⚠️ Link CSV Google Sheet
const GOOGLE_SHEET_CSV_URL =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vSseBYgxKmfcojPVmx-8DF1aSk-uOier9oTZAqQ5aiGcpGx2lIvHvh8do3evul4_30HXt76Vq9sCZ12/pub?output=csv";

export interface Transaction {
	id: string;
	date: string;
	content: string;
	amount: number;
	type: "in" | "out";
	senderName: string; // Tên người gửi (đã tách sẵn)
}

const fetcher = async (url: string) => {
	const response = await fetch(url);
	const csvText = await response.text();

	return new Promise<Transaction[]>((resolve, reject) => {
		Papa.parse(csvText, {
			header: true,
			skipEmptyLines: true,
			complete: (results) => {
				const parsedData = (results.data as unknown[]).map(
					(row: Record<string, string>, index: number) => {
						// 1. Xử lý số tiền
						const rawAmount = row["Số tiền"] || "0";
						const amount = parseFloat(
							rawAmount
								.toString()
								.replace(/,/g, "")
								.replace(/\./g, ""),
						);

						// 2. Xử lý loại giao dịch
						const typeString = ((row["Loại"] || "") as string)
							.toString()
							.toLowerCase()
							.trim();
						const isIncome =
							typeString.includes("tiền vào") ||
							typeString.includes("in");

						// 3. Xử lý nội dung & Tách tên người gửi
						const content = row["Nội dung thanh toán"] || "";
						let senderName = "";

						// Regex tách tên (viết hoa) trước các từ khóa
						const nameMatch = content.match(
							/([A-Z\sÀ-Ỹ]+)(?=\s+(chuyen tien|ck|chuyen khoan|ung ho|donate))/i,
						);
						if (nameMatch && nameMatch[1]) {
							senderName = nameMatch[1]
								.replace(/^[- .]+/, "")
								.trim();
							if (senderName.length < 2) senderName = "";
						}

						const txType: Transaction["type"] = isIncome
							? "in"
							: "out";

						return {
							id: (
								row["Mã tham chiếu"] || `row-${index}`
							).toString(),
							date: (row["Ngày giao dịch"] || "").toString(),
							content: content.toString(),
							amount: Math.abs(Number.isNaN(amount) ? 0 : amount),
							type: txType,
							senderName: senderName,
						};
					},
				);

				// Đảo ngược để mới nhất lên đầu
				resolve(parsedData.reverse());
			},
			error: (err: Error) => reject(err),
		});
	});
};

export const useTransactions = () => {
	const { data, error, isLoading } = useSWR(GOOGLE_SHEET_CSV_URL, fetcher, {
		refreshInterval: 5000, // Tự động refresh mỗi 5s
		revalidateOnFocus: true,
	});

	return {
		transactions: data || [],
		isLoading,
		error,
	};
};
