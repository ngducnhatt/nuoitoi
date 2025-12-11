"use client"; // 👈 Bắt buộc dòng này vì dùng hooks

import Link from "next/link"; // Dùng Link của Next
import { usePathname } from "next/navigation"; // Hook lấy đường dẫn hiện tại

const Header = () => {
	const pathname = usePathname();

	// Hàm check active
	const isActive = (path: string) => pathname === path;

	const getLinkClass = (path: string) =>
		`font-medium transition-colors duration-200 hover:text-blue-600 ${
			isActive(path) ? "text-blue-600" : "text-gray-600"
		}`;

	return (
		<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
						NuôiTôi<span className="text-slate-700">.com</span>
					</Link>

					<nav>
						<ul className="flex space-x-6 sm:space-x-8">
							<li>
								<Link
									href="/saoke"
									className={getLinkClass("/saoke")}>
									Sao kê
								</Link>
							</li>
							<li>
								<Link
									href="/ungho"
									className={getLinkClass("/ungho")}>
									STK
								</Link>
							</li>
							<li>
								<Link
									href="/camon"
									className={getLinkClass("/camon")}>
									Cảm ơn
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
