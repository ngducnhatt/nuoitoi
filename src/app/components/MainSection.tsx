'use client'
import Link from "next/link";
import Image from "next/image";

const MainSection = () => {
	return (
		<div className="flex flex-col gap-20 pb-20">
			<section className="relative pt-20 px-4 text-center lg:text-left bg-gradient-to-b from-blue-50 to-white">
				<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
					<div className="lg:w-1/2 space-y-6">
						<span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide">
							Uy tín 360.36%
						</span>
						<h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
							Hãy nuôi tôi, <br />
							<span className="text-blue-600">
								tôi có sao kê.
							</span>
						</h1>
						<p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
							Hệ thống nuôi tôi có tự động cập nhật lịch sử giao
							dịch 24/7. Minh bạch, nhanh chóng và uy tín. Chỉ ăn
							uống và học tập, tuyệt đối không mua đất.
						</p>
						<div className="flex gap-4 justify-center lg:justify-start pt-4">
							<a
								href="#donate"
								className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">
								Nuôi ngay
							</a>
							<Link
								href="/saoke"
								className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all">
								Xem sao kê
							</Link>
						</div>
					</div>
					<div className="lg:w-1/2 p-10">
						<Image
							src="https://placehold.co/600x500/png?text=Me+and+Code"
							alt="app image"
							width={600}
							height={500}
							className="rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
							unoptimized
						/>
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-4 w-full">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-slate-800">
						Tại sao bạn nên chọn Nuôi tôi?
					</h2>
					<p className="text-slate-500 mt-2">
						Dịch vụ nhận nuôi chuyên nghiệp số 1 hiện nay
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{
							title: "Sao kê 24/7",
							desc: "Hệ thống tự động cập nhật dù chỉ 1đ.",
							icon: "📊",
						},
						{
							title: "Siêu tốc độ",
							desc: "Ting ting là có tên ngay trên cảm ơn.",
							icon: "⚡",
						},
						{
							title: "Minh bạch",
							desc: "Hiển thị rõ ràng nội dung chuyển khoản.",
							icon: "🔍",
						},
						{
							title: "Đúng mục đích",
							desc: "Cam kết chỉ dùng tiền để sinh tồn.",
							icon: "🎯",
						},
					].map((item, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
							<div className="text-4xl mb-4 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto md:mx-0">
								{item.icon}
							</div>
							<h3 className="text-xl font-bold text-slate-800 mb-2">
								{item.title}
							</h3>
							<p className="text-slate-500 text-sm">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="py-10 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-slate-800">
							So sánh
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						<div className="bg-white p-8 rounded-3xl border-2 border-blue-50 shadow-xl shadow-blue-100/50 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
							<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
								Khuyên dùng
							</div>

							<div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
								<span className="text-4xl">😇</span>
								<div>
									<h3 className="text-xl font-bold text-slate-900">
										Ở đây (Uy tín)
									</h3>
									<p className="text-sm text-green-600 font-semibold">
										Cam kết 100%
									</p>
								</div>
							</div>

							<ul className="space-y-4">
								{[
									"Sao kê đầy đủ từng đồng",
									"Chi tiêu rõ ràng, hợp lý",
									"Chỉ dùng 1 STK duy nhất",
									"Luôn rep tin nhắn cảm ơn",
									"Vinh danh mọi mạnh thường quân",
								].map((item, i) => (
									<li
										key={i}
										className="flex items-start gap-3">
										<div className="mt-0.5 min-w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">
											✔
										</div>
										<span className="text-slate-700 font-medium leading-tight">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 opacity-90 hover:opacity-100 transition-opacity">
							<div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
								<span className="text-4xl grayscale">😈</span>
								<div>
									<h3 className="text-xl font-bold text-gray-600">
										Chỗ &quot;khác&quot;
									</h3>
									<p className="text-sm text-red-500 font-semibold">
										Rủi ro cao
									</p>
								</div>
							</div>

							<ul className="space-y-4">
								{[
									"Sao kê mập mờ, che đậy",
									"Chi tiêu không giải trình",
									"Nhiều STK gây nhầm lẫn",
									"Block người hỏi sao kê",
									"Trả lời vòng vo",
								].map((item, i) => (
									<li
										key={i}
										className="flex items-start gap-3">
										{/* Icon X Đỏ */}
										<div className="mt-0.5 min-w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">
											✘
										</div>
										<span className="text-gray-500 leading-tight">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				id="donate"
				className="max-w-3xl mx-auto px-4 w-full text-center">
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
		</div>
	);
};
export default MainSection;
