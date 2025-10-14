async function checkWebsiteStatus() {
    try {
        const res = await fetch("https://sandbox.hiinterviews.com/hiinterview_backend/api/website-status/");
        const data = await res.json();
        if (!data.is_active) {

            localStorage.clear();
            sessionStorage.clear();

            document.body.innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <div class="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lift ring-1 ring-black/5 p-6 max-w-md text-center">
                    <h3 class="text-lg font-bold text-ink-800">No Slots Available</h3>
                    <p class="mt-2 text-sm text-ink-600">
                        All slots are booked now. If any new slots come, we will re-open.
                    </p>
                </div>
            </div>
`;
            return false;
        }
        return true;
    } catch (err) {
        console.error("Could not check website status", err);
        return true;
    }
}