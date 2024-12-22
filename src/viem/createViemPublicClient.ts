import { createPublicClient, http } from 'viem'
import { modeTestnet } from 'viem/chains'

export function createViemPublicClient() {
    return createPublicClient({
        chain: modeTestnet,
        transport: http(),
    });
}
