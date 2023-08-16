

function initPacket() {
	const packet = [
		{
			id: 'document',
			name: 'CZML Geometries: Polygon',
			version: '1.0'
		}
	]
	return packet
}

function addPacketNodeToPacket(nodeName: string, nodeObject: any, packet: any) {
	packet[nodeName] = nodeObject
}


export {
	initPacket,
	addPacketNodeToPacket,
}