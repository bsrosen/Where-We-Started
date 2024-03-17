        // JavaScript logic to calculate and update time
        function updateTime() {
            const startDate = new Date('February 25, 2024 00:00:00').getTime();
            const now = new Date().getTime();
            const timeDifference = now - startDate;

            const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.4375));
            const weeks = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('years').textContent = years;
            document.getElementById('months').textContent = months;
            document.getElementById('weeks').textContent = weeks;
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        // Update time every second
        setInterval(updateTime, 1000);

        // Initial call to display time immediately
        updateTime();