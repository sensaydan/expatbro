import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Expat Bro - Your Guide to Living in Latin America'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #78350f 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1e293b',
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            EB
          </div>
        </div>
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Expat Bro
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#f59e0b',
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Your Guide to Living in Latin America
        </div>
        
        {/* Countries */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            fontSize: 28,
            color: '#94a3b8',
          }}
        >
          <span>🇲🇽 Mexico</span>
          <span>•</span>
          <span>🇨🇴 Colombia</span>
          <span>•</span>
          <span>🇧🇷 Brazil</span>
          <span>•</span>
          <span>🇻🇪 Venezuela</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
