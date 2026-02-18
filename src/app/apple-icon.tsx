import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1e293b',
          fontWeight: 800,
          borderRadius: 36,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        EB
      </div>
    ),
    {
      ...size,
    }
  )
}
