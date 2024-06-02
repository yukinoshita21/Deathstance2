function execCmd(command) {
    document.execCommand(command, false, null);
}

function execCmdWithArg(command, arg) {
    document.execCommand(command, false, arg);
}

document.addEventListener('DOMContentLoaded', () => {
    const pointer = document.createElement('div');
    pointer.classList.add('custom-pointer');
    document.body.appendChild(pointer);

    document.addEventListener('mousemove', (e) => {
        pointer.style.left = `${e.pageX}px`;
        pointer.style.top = `${e.pageY}px`;
    });

    document.addEventListener('mouseenter', () => {
        pointer.classList.add('glitch');
    });

    document.addEventListener('mouseleave', () => {
        pointer.classList.remove('glitch');
    });
});
