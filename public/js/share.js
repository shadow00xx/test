// Reliable sharing for product pages.
window.share = async function share() {
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = canonical && canonical.href ? canonical.href : window.location.href;
  const title = document.title || 'دلالة';
  const text = title;

  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      alert('تم نسخ رابط الإعلان. يمكنك مشاركته الآن.');
      return;
    }

    window.prompt('انسخ رابط الإعلان:', url);
  } catch (error) {
    if (error && error.name === 'AbortError') return;

    try {
      window.prompt('تعذر فتح المشاركة. انسخ رابط الإعلان:', url);
    } catch (_) {
      alert('تعذر فتح المشاركة. انسخ الرابط يدويًا.');
    }
  }
};
