const billboardTemplate =
{
	"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==",
	"scale": 1.5
}


const clockTemplate = {
	"interval": "2023-01-01T00:00:00Z/2023-01-01T00:10:00Z",
	"currentTime": "2023-01-01T00:00:00Z",
	"multiplier": 60,
	"range": "LOOP_STOP",
	"step": "SYSTEM_CLOCK_MULTIPLIER"
}


const labelTemplate = {
	"text": "这个是文字",
}
// packet[1].label = labelTemplate[0]
// packet[1].billboard = billboardTemplate[0]

const polylineTemplate = {
	"positions": {
		cartographicDegrees: [
			121.59777,
			31.03883,
			0,
			121.59776,
			31.03883,
			0,
		]
	}
}

const pointTemplate = {
	"color": {
		"rgba": [
			255,
			255,
			255,
			255
		]
	},
	"outlineColor": {
		"rgba": [
			255,
			0,
			0,
			255
		]
	},
	"outlineWidth": 4,
	"pixelSize": 20

}

const modelTemplate = {
	"gltf": "/car1.glb",
	"minimumPixelSize": 128,
	"maximumScale": 20000,
}

const ALL_TEMPLATE = Object.freeze({
	EMPTY_PACKET_ARY: [
		{
			id: 'document',
			name: 'CZML Geometries: Polygon',
			version: '1.0'
		},
		{
			id: 'packet1',
			name: 'packet title',
			position: {
				cartographicDegrees: [121, 31, 22]
			},
			// billboard: {
			// 	"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==",
			// 	"scale": 1.5
			// }
		}
	],
	EMPTY_PACKET: {
		id: 'packet1',
		name: 'packet title',
		position: {
			cartographicDegrees: [121, 31, 22]
		}
	},
	model: modelTemplate,
	label: labelTemplate,
	billboard: billboardTemplate,
	polyline: polylineTemplate,
	clock: clockTemplate,
	point: pointTemplate,
})


export {
	ALL_TEMPLATE
}
