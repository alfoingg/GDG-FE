import "./App.css";

function App() {
  const username = "Mirae";
  const location = "홍익대학교";
  const likeCount = 1234;
  const caption = "React 떠먹기";

  return (
    <main className="feed">
      <article className="post">
        <header className="profile">
          <img className="profile-image" src="public/images/gdg-avatar.png" alt="프로필" />

          <div className="profile-text">
            {/* 여기! */}
            <strong>{username}</strong>
            <span>{location}</span>
          </div>
          <button className="more-button">•••</button>
        </header>
        <img className="post-image" src="public/images/wow.png" alt="피카소 캐릭터" />
        <section className="content">
          <div className="actions">
            <div>
              <button aria-label="좋아요">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </button>
              <button aria-label="댓글">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
                </svg>
              </button>
              <button aria-label="DM 보내기">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
                </svg>
              </button>
            </div>

            <button aria-label="저장">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 2h16v20l-8-6-8 6V2Z" />
              </svg>
            </button>
          </div>
          <p className="likes">
            좋아요 <strong>{likeCount.toLocaleString()}</strong>개
          </p>
          <p className="caption">
            <strong>{username}</strong>
            {caption}
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
