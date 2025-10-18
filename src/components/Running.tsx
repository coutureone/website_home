import {
	Activity,
	Award,
	Calendar,
	Target,
	Timer,
	TrendingUp
} from 'lucide-react';

interface RunningStats {
	label: string;
	value: string;
	icon: React.ReactNode;
	change?: string;
}

interface RunningRecord {
	id: number;
	date: string;
	distance: string;
	time: string;
	pace: string;
	route: string;
}

const stats: RunningStats[] = [
	{
		label: '总里程',
		value: '2,458 km',
		icon: <Activity size={24} />,
		change: '+12.3%'
	},
	{
		label: '本月里程',
		value: '186 km',
		icon: <TrendingUp size={24} />,
		change: '+8.5%'
	},
	{
		label: '跑步天数',
		value: '342 天',
		icon: <Calendar size={24} />
	},
	{
		label: '平均配速',
		value: '5\'23"/km',
		icon: <Timer size={24} />
	}
];

const recentRuns: RunningRecord[] = [
	{
		id: 1,
		date: '2024-10-18',
		distance: '10.5 km',
		time: '56:32',
		pace: '5\'23"/km',
		route: '江滨公园晨跑'
	},
	{
		id: 2,
		date: '2024-10-16',
		distance: '15.0 km',
		time: '1:22:45',
		pace: '5\'31"/km',
		route: '长跑训练'
	},
	{
		id: 3,
		date: '2024-10-14',
		distance: '8.2 km',
		time: '43:18',
		pace: '5\'17"/km',
		route: '轻松跑'
	},
	{
		id: 4,
		date: '2024-10-12',
		distance: '12.0 km',
		time: '1:04:24',
		pace: '5\'22"/km',
		route: '周末长距离'
	}
];

export default function Running() {
	return (
		<section id="running" className="py-20 px-4 sm:px-6 lg:px-8">
			<a
				href="https://running.coutures.top"
				target="_blank"
				rel="noopener noreferrer"
				className="block hover:opacity-90 transition-opacity cursor-pointer"
			>
				<div className="container mx-auto max-w-6xl">
					{/* Section Header */}
					<div className="text-center mb-16">
						<div className="flex justify-center mb-4">
							<div className="p-3 rounded-full bg-primary/10">
								<Activity size={32} className="text-primary" />
							</div>
						</div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
							跑步记录
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							每一步都是进步，坚持跑步，享受运动带来的快乐
						</p>
						<p className="text-sm text-muted-foreground mt-2">
							点击此区域访问完整跑步数据 →{' '}
							<a
								href="https://running.coutures.top"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline font-medium"
							>
								running.coutures.top
							</a>
						</p>
					</div>

					{/* Stats Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-background rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow"
							>
								<div className="flex items-start justify-between mb-4">
									<div className="p-2 rounded-lg bg-primary/10 text-primary">
										{stat.icon}
									</div>
									{stat.change && (
										<span className="text-sm font-medium text-green-500">
											{stat.change}
										</span>
									)}
								</div>
								<div className="space-y-1">
									<p className="text-2xl font-bold">{stat.value}</p>
									<p className="text-sm text-muted-foreground">{stat.label}</p>
								</div>
							</div>
						))}
					</div>

					{/* Recent Runs */}
					<div className="bg-background rounded-lg border shadow-sm overflow-hidden">
						<div className="p-6 border-b">
							<h3 className="text-xl font-semibold flex items-center">
								<Award size={20} className="mr-2 text-primary" />
								最近跑步记录
							</h3>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="bg-secondary/50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
											日期
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
											距离
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
											时间
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
											配速
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
											路线
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									{recentRuns.map((run) => (
										<tr
											key={run.id}
											className="hover:bg-secondary/30 transition-colors"
										>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												{run.date}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
												{run.distance}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												{run.time}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												{run.pace}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
												{run.route}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* Goal Section */}
					<div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border p-8">
						<div className="flex items-start space-x-4">
							<div className="p-3 rounded-lg bg-primary text-primary-foreground">
								<Target size={24} />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">2024年度目标</h3>
								<p className="text-muted-foreground mb-4">
									全年跑步总里程达到 3,000 公里，完成 2 场马拉松比赛
								</p>
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm mb-1">
										<span>年度进度</span>
										<span className="font-medium">2,458 / 3,000 km</span>
									</div>
									<div className="w-full bg-secondary rounded-full h-2.5">
										<div
											className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
											style={{ width: '82%' }}
										></div>
									</div>
									<p className="text-xs text-muted-foreground">
										已完成 82%，还需 542 km
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</section>
	);
}
