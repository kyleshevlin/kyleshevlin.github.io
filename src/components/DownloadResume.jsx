import resumePdf from 'url:../assets/KyleShevlinResume.pdf'

export default function DownloadResume() {
  return (
    <a
      download
      href={resumePdf}
      style={{
        backgroundColor: 'var(--accent)',
        borderRadius: 4,
        color: 'white',
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        textDecoration: 'none',
      }}
    >
      Download a copy of this resume
    </a>
  )
}
