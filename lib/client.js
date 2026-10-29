window.__ModuleLoader__.load({
  id: 'dsh-wide-chat',
  factory() {
    // 内置规则：内容宽 = clamp(680px, 列宽 * 0.64, 920px)。
    // 这里改为 列宽 - 64px；滚动区自带左右各 32px padding，所以正文会填满可用宽度。
    // 侧栏里的嵌入式会话（embeddedBody）保持原样。
    const CSS =
      '[data-conversation-content][data-conversation-region="chat"][data-content-phase="active"]:not([class*="embeddedBody"]){' +
      '--dsh-chat-content-width:calc(var(--dsh-conversation-column-width,100%) - 64px) !important;}';

    function apply(ctx) {
      ctx.effect(() => {
        const style = document.createElement('style');
        style.setAttribute('data-dsh-wide-chat', '');
        style.textContent = CSS;
        document.head.appendChild(style);
        return () => style.remove();
      }, 'wide-chat: style');
    }

    return { apply };
  },
});
