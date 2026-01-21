<script>
      // 1. 回到頂部按鈕
      const btnTop = document.getElementById("backToTop");
      window.onscroll = () => {
        if (document.documentElement.scrollTop > 400) btnTop.classList.add("show");
        else btnTop.classList.remove("show");
      };
      btnTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

      // 2. 漢堡選單關閉邏輯
      document.querySelectorAll("nav a").forEach((link) => {
        link.onclick = () => (document.getElementById("menu_control").checked = false);
      });

      // 3. 修正後的「查看更多」功能
      const loadMoreBtn = document.getElementById("loadMoreBtn");
      
      loadMoreBtn.onclick = function() {
        // 每次點擊重新抓取當前「還隱藏著」的卡片
        const hiddenVideos = document.querySelectorAll(".video-card.hidden");
        const showCount = 3; // 每次顯示 3 個

        for (let i = 0; i < showCount; i++) {
          if (hiddenVideos[i]) {
            hiddenVideos[i].classList.remove("hidden");
          }
        }

        // 如果全部都顯示了，隱藏按鈕
        const remainingHidden = document.querySelectorAll(".video-card.hidden");
        if (remainingHidden.length === 0) {
          loadMoreBtn.style.display = "none";
        }
      };
    </script>