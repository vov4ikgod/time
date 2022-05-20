async function getDashboardData(url = './js/data.json') {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

class DashboardItem {
    static PERIODS = {
        daily: 'day',
        weekly: 'week',
        monthly: 'month',
    }

    constructor(data, container = '.dashboard-wrapper', view = 'weekly') {
        this.data = data;
        this.container = document.querySelector(container);
        this.view = view;
        
        this._createMarkup();
    }

    _createMarkup() {
        const {title, timeframes} = this.data;

        const id = title.toLowerCase().replace(/ /g, '-');
        const {current, previous} = timeframes[this.view.toLowerCase()];

        this.container.insertAdjacentHTML('beforeend', `
            <div class="dashboard-item dashboard-item-${id}">
                <div class="traking-card">
                    <header class="traking-card-header">
                        <h4 class="traking-card-title">${title}</h4>
                    </header>
                    <div class="traking-card-body">
                        <div class="traking-card-time">${current}hrs</div>
                        <div class="traking-card-time-prev">Last ${DashboardItem.PERIODS[this.view]} - ${previous}hrs</div>
                    </div> 
                </div>
            </div>
        `);

        this.time = this.container.querySelector(`.dashboard-item-${id} .traking-card-time`);
        this.prev = this.container.querySelector(`.dashboard-item-${id} .traking-card-time-prev`);
    }

    changeView(view) {
        this.view = view.toLowerCase();
        const {current, previous} = this.data.timeframes[this.view.toLowerCase()];

        this.time.innerText = `${current}hrs`;
        this.prev.innerText = `Last ${DashboardItem.PERIODS[this.view]} - ${previous}hrs`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getDashboardData()
        .then(data => {
            const activities = data.map(activity => new DashboardItem(activity));

            const selectors = document.querySelectorAll('.dashboard-menu-item');
            selectors.forEach(selector => 
                selector.addEventListener('click', function() {
                    selectors.forEach(sel => sel.classList.remove('dashboard-menu-item'))
                    selector.classList.add('dashboard-menu-item-active');

                    const currentView = selector.innerText.trim().toLowerCase();
                    activities.forEach(activity => activity.changeView(currentView));
                })
            )
        })
});

console.log(122);