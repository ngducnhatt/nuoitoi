'use client'
import Image from "next/image";

const UnghoPage = () => {
	return (
		<section className="max-w-3xl mx-auto px-4 pt-10 w-full text-center">
			<h2 className="text-3xl font-bold mb-8 text-slate-800">
				Nuôi tôi ngay tại đây
			</h2>

			<div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="w-full md:w-1/2 flex justify-center">
						<Image
							src="https://img.vietqr.io/image/MB-0862264376-compact.png"
							alt="QR Code"
							width={192}
							height={192}
							className="w-48 h-48 border-4 border-white shadow-lg rounded-xl"
							unoptimized
						/>
					</div>

					<div className="w-full md:w-1/2 text-left space-y-3">
						<div>
							<p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
								Ngân hàng
							</p>
							<p className="text-xl font-bold text-blue-700">
								MB Bank (Quân đội)
							</p>
						</div>
						<div>
							<p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
								Số tài khoản
							</p>
							<div className="flex items-center gap-2">
								<p className="text-2xl font-mono font-black text-slate-900">
									0862 264 376
								</p>
								<button
									onClick={() =>
										navigator.clipboard.writeText(
											"0862264376",
										)
									}
									className="p-1 text-gray-400 hover:text-blue-600"
									title="Copy">
									📋
								</button>
							</div>
						</div>
						<div>
							<p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
								Chủ tài khoản
							</p>
							<p className="text-lg font-bold text-slate-700">
								NGUYEN DUC NHAT
							</p>
						</div>
					</div>
				</div>

				<p className="mt-8 text-sm text-slate-500 italic bg-gray-50 p-3 rounded-lg">
					&quot;Ngay sau khi bạn ting ting, tên bạn sẽ xuất hiện ở
					bảng Sao kê và Cảm ơn&quot;
				</p>
			</div>
		</section>
	);
};

export default UnghoPage;
