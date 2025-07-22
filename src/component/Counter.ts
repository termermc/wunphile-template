import { type Component, BehaviorComponent, html } from 'wunphile'

type CounterProps = {
	/**
	 * The initial count.
	 * Optional, defaults to 0.
	 */
	initialCount?: number

	/**
	 * The initial text to display before the button is clicked.
	 */
	initialText: string
}

export const Counter: Component<CounterProps, void> = ({
	initialCount,
	initialText,
}) => {
	return BehaviorComponent(
		{ module: import('../client/behavior/Counter.ts') },
		html`
			<button data-initial="${initialCount ?? 0}">${initialText}</button>
		`,
	)
}
