import React from 'react'
import ReactFlow from 'react-flow-renderer'
import { SmartEdge } from '../index'
import type { ReactFlowProps } from 'react-flow-renderer'

export type GraphProps = ReactFlowProps

const edgeTypes = {
	smart: SmartEdge
}

export const Graph = (props: GraphProps) => {
	const { children, ...rest } = props

	const style = {
		background: '#fafafa',
		width: '100%',
		height: 500
	}

	return (
		<ReactFlow
			style={style}
			maxZoom={1}
			minZoom={0.5}
			edgeTypes={edgeTypes}
			{...rest}
		>
			{children}
		</ReactFlow>
	)
}
