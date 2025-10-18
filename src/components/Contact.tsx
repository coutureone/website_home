'use client';

import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// 这里可以添加表单提交逻辑
		console.log('Form submitted:', formData);
		alert('感谢您的留言！我会尽快回复您。');
		setFormData({ name: '', email: '', message: '' });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const contactInfo = [
		{
			icon: <Mail size={20} />,
			label: '邮箱',
			value: 'hello@coutures.top',
			href: 'mailto:hello@coutures.top'
		},
		{
			icon: <Phone size={20} />,
			label: '博客',
			value: 'blog.coutures.top',
			href: 'https://blog.coutures.top'
		},
		{
			icon: <MapPin size={20} />,
			label: '跑步',
			value: 'running.coutures.top',
			href: 'https://running.coutures.top'
		}
	];

	const socialLinks = [
		{
			name: 'GitHub',
			icon: <Github size={20} />,
			href: 'https://github.com/coutures',
			color: 'hover:text-gray-900 dark:hover:text-gray-100'
		},
		{
			name: '博客',
			icon: <Linkedin size={20} />,
			href: 'https://blog.coutures.top',
			color: 'hover:text-blue-600'
		},
		{
			name: 'Email',
			icon: <Mail size={20} />,
			href: 'mailto:hello@coutures.top',
			color: 'hover:text-red-500'
		}
	];

	return (
		<section
			id="contact"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
		>
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						联系我
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						有任何问题或合作意向？欢迎随时与我联系！
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-semibold mb-6">联系信息</h3>
							<div className="space-y-4">
								{contactInfo.map((info, index) => (
									<div
										key={index}
										className="flex items-start space-x-4 p-4 rounded-lg bg-background border hover:shadow-md transition-shadow"
									>
										<div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
											{info.icon}
										</div>
										<div>
											<p className="text-sm text-muted-foreground mb-1">
												{info.label}
											</p>
											{info.href ? (
												<a
													href={info.href}
													className="font-medium hover:text-primary transition-colors"
												>
													{info.value}
												</a>
											) : (
												<p className="font-medium">{info.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-xl font-semibold mb-4">社交媒体</h3>
							<div className="flex space-x-4">
								{socialLinks.map((social, index) => (
									<Link
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`p-3 rounded-lg bg-background border hover:border-primary transition-all ${social.color}`}
										aria-label={social.name}
									>
										{social.icon}
									</Link>
								))}
							</div>
						</div>

						{/* Additional Info */}
						<div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border">
							<h3 className="text-xl font-semibold mb-2">工作时间</h3>
							<p className="text-muted-foreground">
								周一至周五: 9:00 - 18:00
								<br />
								周末: 10:00 - 16:00
								<br />
								<span className="text-sm">（北京时间）</span>
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-background rounded-lg border shadow-sm p-8">
						<h3 className="text-2xl font-semibold mb-6">发送消息</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									姓名
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="请输入您的姓名"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									邮箱
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="your@email.com"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									消息
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
									placeholder="请输入您想说的话..."
								/>
							</div>

							<button
								type="submit"
								className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
							>
								<Send size={20} className="mr-2" />
								发送消息
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
