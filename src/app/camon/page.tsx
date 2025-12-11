"use client";

import React from "react";
import Link from "next/link";
import { useTransactions } from "@/app/hooks/useTransactions"; // Import hook

const CamOnPage = () => {
	// Gọi hook
	const { transactions, isLoading, error } = useTransactions();

	// Logic lọc riêng cho trang Cảm Ơn
	const donations = transactions.filter((t) => {
		// 1. Chỉ lấy Tiền vào
		if (t.type !== "in") return false;
		// 2. Số tiền phải > 0
		if (t.amount <= 0) return false;

		return true;
	});

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("vi-VN", {
			style: "currency",
			currency: "VND",
		}).format(amount);
	};

	return (
		<div className="min-h-screen bg-slate-50 py-12 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<div className="mb-12">
					<span className="text-5xl mb-4 block animate-bounce">
						❤️
					</span>
					<h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
						Siêu cảm ơn
					</h1>
				</div>

				{isLoading && donations.length === 0 ? (
					<div className="flex justify-center py-12">
						<div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-500"></div>
					</div>
				) : error ? (
					<div className="text-green-500">Lỗi tải dữ liệu.</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{donations.map((item) => (
							<div
								key={item.id}
								className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-50 group hover:-translate-y-1 relative overflow-hidden">
								<div className="flex items-center gap-4 mb-4 relative z-10">
									<div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center font-bold text-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
										{item.senderName
											? item.senderName
													.charAt(0)
													.toUpperCase()
											: "?"}
									</div>
									<div className="text-left overflow-hidden">
										<h3
											className="font-bold text-slate-800 truncate text-lg"
											title={
												item.senderName || "Ẩn danh"
											}>
											{item.senderName ||
												"Người Giấu Tên"}
										</h3>
										<p className="text-xs text-slate-400 font-mono">
											{item.date}
										</p>
									</div>
								</div>

								<div className="bg-slate-50 p-4 rounded-xl mb-4 text-left min-h-[80px] relative z-10">
									<p className="text-sm text-slate-600 italic leading-relaxed break-words">
										&quot;{item.content}&quot;
									</p>
								</div>

								<div className="text-right pt-2 border-t border-slate-50 relative z-10">
									<span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-sm font-bold px-3 py-1 rounded-full border border-green-100">
										<span>+</span>{" "}
										{formatCurrency(item.amount)}
									</span>
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mt-16">
					<Link
						href="/"
						className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all">
						← Quay về trang chủ
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CamOnPage;
