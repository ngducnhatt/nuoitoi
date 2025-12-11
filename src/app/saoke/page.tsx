"use client";

import React from "react";
import { useTransactions } from "@/app/hooks/useTransactions"; // Import hook

const SaoKePage = () => {
	// Gọi hook dùng chung
	const { transactions, isLoading, error } = useTransactions();

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("vi-VN", {
			style: "currency",
			currency: "VND",
		}).format(amount);
	};

	const incomingData = transactions.filter((t) => t.type === "in");
	const outgoingData = transactions.filter((t) => t.type === "out");

	const totalIn = incomingData.reduce((sum, item) => sum + item.amount, 0);
	const totalOut = outgoingData.reduce((sum, item) => sum + item.amount, 0);

	return (
		<div className="min-h-screen bg-slate-50 py-12 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10">
					<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
						Live Update (5s)
					</div>
					<h1 className="text-3xl font-extrabold text-slate-900">
						Sao Kê Công Khai
					</h1>
				</div>

				{isLoading && transactions.length === 0 ? (
					<div className="flex justify-center py-12">
						<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
					</div>
				) : error ? (
					<div className="text-center text-red-500">
						Lỗi tải dữ liệu.
					</div>
				) : (
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* CỘT TIỀN VÀO */}
						<div className="bg-white rounded-3xl shadow-xl border border-green-100 flex flex-col h-[600px] overflow-hidden">
							<div className="p-6 border-b border-green-50 bg-green-50/30">
								<h2 className="text-xl font-bold text-green-700 flex justify-between items-center">
									<span>📥 Nhận tiền</span>
									<div className="text-right">
										<span className="text-lg">
											{formatCurrency(totalIn)}
										</span>
									</div>
								</h2>
							</div>
							<div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
								{incomingData.map((t) => (
									<div
										key={t.id}
										className="flex justify-between items-start p-4 bg-white border border-green-50 rounded-2xl shadow-sm hover:bg-green-50 transition-all">
										<div className="flex-1 pr-4">
											<p className="text-xs text-slate-400 font-mono mb-1">
												{t.date}
											</p>
											<p className="font-semibold text-slate-700 text-sm line-clamp-2">
												&quot;{t.content}&quot;
											</p>
										</div>
										<span className="font-bold text-green-600 text-sm">
											+{formatCurrency(t.amount)}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* CỘT TIỀN RA */}
						<div className="bg-white rounded-3xl shadow-xl border border-orange-100 flex flex-col h-[600px] overflow-hidden">
							<div className="p-6 border-b border-orange-50 bg-orange-50/30">
								<h2 className="text-xl font-bold text-orange-700 flex justify-between items-center">
									<span>🛒 Chi tiêu</span>
									<div className="text-right">
										<span className="text-lg">
											{formatCurrency(totalOut)}
										</span>
									</div>
								</h2>
							</div>
							<div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
								{outgoingData.map((t) => (
									<div
										key={t.id}
										className="flex justify-between items-start p-4 bg-white border border-orange-50 rounded-2xl shadow-sm hover:bg-orange-50 transition-all">
										<div className="flex-1 pr-4">
											<p className="text-xs text-slate-400 font-mono mb-1">
												{t.date}
											</p>
											<p className="font-semibold text-slate-700 text-sm line-clamp-2">
												&quot;{t.content}&quot;
											</p>
										</div>
										<span className="font-bold text-orange-500 text-sm">
											-{formatCurrency(t.amount)}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SaoKePage;
