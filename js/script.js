document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('frequencyChart');
   
    // 监听键盘按下事件
    document.addEventListener('keydown', (event) => {
        const keyPressed = event.key.toUpperCase();
        const keyElement = document.querySelector(`.key[data-key="${keyPressed}"]`);
        const audioPath = keyElement.getAttribute('data-audio');
        const audio = new Audio(audioPath); 
        audio.currentTime = 0; // 重置播放时间
        audio.play(); // 播放音频
        if (keyElement) {
            keyElement.classList.add('active');
            
        }
    });

    // 监听键盘松开事件
    document.addEventListener('keyup', (event) => {
        const keyPressed = event.key.toUpperCase();
        const keyElement = document.querySelector(`.key[data-key="${keyPressed}"]`);

        if (keyElement) {
            keyElement.classList.remove('active');
        }
    });

    // 鼠标点击效果（可选）
    keys.forEach(key => {
        key.addEventListener('mousedown', () => {
            key.classList.add('active');
        });

        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });

        key.addEventListener('mouseleave', () => {
            key.classList.remove('active');
        });
    });
    
});