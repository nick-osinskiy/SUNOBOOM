// v0.183 — bounded presentation-only snapshot. All data and actions stay in legacy code.
// The profile is represented only by its already-visible single-character avatar.
export function normalizeTopHeader(snapshot) {
  if (!snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot) ||
      typeof snapshot.breadcrumb !== 'string' || snapshot.breadcrumb.length > 160 ||
      typeof snapshot.logoSrc !== 'string' || !snapshot.logoSrc ||
      snapshot.logoSrc.length > 20000 ||
      typeof snapshot.version !== 'string' || !/^\d+\.\d+$/.test(snapshot.version) ||
      typeof snapshot.avatarInitial !== 'string' || snapshot.avatarInitial.length !== 1 ||
      !Number.isSafeInteger(snapshot.unreadCount) || snapshot.unreadCount < 0 ||
      typeof snapshot.noticeOpen !== 'boolean') return null;
  return Object.freeze({
    breadcrumb: snapshot.breadcrumb,
    logoSrc: snapshot.logoSrc,
    version: snapshot.version,
    avatarInitial: snapshot.avatarInitial,
    unreadCount: snapshot.unreadCount,
    noticeOpen: snapshot.noticeOpen,
    noticeBadge: snapshot.unreadCount ? Math.min(snapshot.unreadCount, 99) : 3,
    noticePreview: snapshot.unreadCount === 0
  });
}
