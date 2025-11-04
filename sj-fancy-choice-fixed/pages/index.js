
export default function Home() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>SJ Fancy Choice ✨</h1>
      <p>Your one-stop shop for stylish ladies' & kids' accessories!</p>
      <p>Shop categories: Watches, Toys, Jewellery, Bangles, Earrings, Perfumes & more.</p>
      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        💬 Order on WhatsApp
      </a>
    </div>
  );
}
