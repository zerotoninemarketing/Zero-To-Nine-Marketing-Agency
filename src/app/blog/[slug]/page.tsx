// Temporarily disabled for WordPress conversion
// Blog functionality will be handled by WordPress

export default function Page({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}