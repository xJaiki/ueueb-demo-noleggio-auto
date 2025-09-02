import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onOpen }) => {
	const chips = (project.tags || []).slice(0, 2);
	const extra = Math.max(0, (project.tags?.length || 0) - chips.length);

	return (
		<button
			type="button"
			onClick={() => onOpen(project)}
			className="group relative w-full overflow-hidden rounded-3xl glass-surface border border-dark/5 transition-shadow text-left shadow-sm hover:shadow-lg flex flex-col h-auto sm:h-[380px] md:h-[400px] lg:h-[420px]"
		>
			{/* Media fixed aspect (3:2) */}
			<div className="relative w-full aspect-[3/2] overflow-hidden shrink-0">
				<img
					src={project.cover}
					alt={project.title}
					className="block w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.03] via-transparent to-transparent opacity-90" />
				{/* Chips overlay (max 2) */}
				{chips.length > 0 && (
					<div className="absolute left-3 bottom-3 flex items-center gap-1.5">
						{chips.map((t) => (
							<span
								key={t}
								className="text-[10px] px-2 py-0.5 rounded-full border border-white/60 bg-white/70 text-foreground/80 shadow-sm"
							>
								{t}
							</span>
						))}
						{extra > 0 && (
							<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-white/50 bg-white/60 text-foreground/70">
								+{extra}
							</span>
						)}
					</div>
				)}
			</div>

			{/* Content */}
			<div className="px-4 py-4 flex-1 flex flex-col overflow-hidden">
				<h3 className="text-base md:text-lg font-bold tracking-tight text-heading line-clamp-2">
					{project.title}
				</h3>
				<p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
					{project.subtitle}
				</p>
				<div className="mt-auto pt-3">
					<span className="inline-flex items-center text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
						Dettagli
						<ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
					</span>
				</div>
			</div>
		</button>
	);
};

export default ProjectCard;
