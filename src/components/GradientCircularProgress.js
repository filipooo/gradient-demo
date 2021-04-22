import React from 'react';

const GradientCircularProgress = ({
    id,
	size,
	progress,
	strokeWidth = 6,
	emptyColor,
	startColor,
	endColor,
	middleColor,
	withSnail = false,
	classes,
	children,
}) => {
	const DIAMETER = 50;
	const WIDTH = DIAMETER + strokeWidth;
	const firstHalfProg = progress > DIAMETER ? 1 : progress / DIAMETER;
	const secondHalfProg =
		progress <= DIAMETER ? 0 : (progress - DIAMETER) / DIAMETER;
	const halfCircumference = (Math.PI * 2 * (DIAMETER / 2)) / 2;

	return (
		<div
			className={['CircularProgress', classes?.indicator.container].join(
				' '
			)}
			style={{ width: `${size}px`, height: `${size}px` }}
		>
			<svg viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
				<defs>
					<linearGradient
						id={`${id}-firstHalfGradient`}
						x1="50%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop offset="0%" stopColor={startColor} />
						<stop offset="90%" stopColor={middleColor} />
					</linearGradient>

					<linearGradient
						id={`${id}-secondHalfGradient`}
						x1="0%"
						y1="0%"
						x2="50%"
						y2="100%"
					>
						<stop offset="0%" stopColor={endColor} />
						<stop offset="90%" stopColor={middleColor} />
					</linearGradient>
				</defs>

				<path
					className={classes?.indicator.empty}
					fill="none"
					stroke={emptyColor}
					d={`
              M ${strokeWidth / 2} ${WIDTH / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 ${DIAMETER} 0
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 -${DIAMETER} 0
            `}
					strokeWidth={strokeWidth}
				/>

				<path
					className={classes?.indicator.progression}
					fill="none"
					stroke={`url(#${id}-firstHalfGradient)`}
					strokeDasharray={`${
						firstHalfProg * halfCircumference
					},${halfCircumference}`}
					strokeLinecap="round"
					d={`
              M ${WIDTH / 2} ${strokeWidth / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 0 ${DIAMETER}
            `}
					strokeWidth={strokeWidth}
				/>

				{progress >= 50 && (
					<path
						className={classes?.indicator.progression}
						fill="none"
                        stroke={`url(#${id}-secondHalfGradient)`}
						strokeDasharray={`${
							secondHalfProg * halfCircumference
						},${halfCircumference}`}
						strokeLinecap="round"
						d={`
              M ${WIDTH / 2} ${WIDTH - strokeWidth / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 0 1 0 -${DIAMETER}
            `}
						strokeWidth={strokeWidth}
					/>
				)}

				{withSnail && (
					<circle
						className={classes?.snail}
						cx={WIDTH / 2}
						cy={strokeWidth / 2}
						r={strokeWidth / 4}
						fill="white"
						transform={`rotate(${360 * (progress / 100)}, ${
							WIDTH / 2
						}, ${WIDTH / 2})`}
					/>
				)}
			</svg>
		</div>
	);
};

export default GradientCircularProgress;
