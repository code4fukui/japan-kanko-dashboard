# japan-kanko-dashboard

A dashboard for visualizing the number of tourists visiting Japan, with data broken down by prefecture and city.

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)


![Japan Kanko Dashboard Screenshot](kankodashboard.jpg)


## Demo

- **[Main Dashboard](https://code4fukui.github.io/japan-kanko-dashboard/)**: An interactive dashboard with treemaps and line charts to explore monthly tourist data by region, prefecture, and city.
- **[Year-on-Year Comparison](https://code4fukui.github.io/japan-kanko-dashboard/compprev.html)**: A tool to compare monthly tourist arrivals for a specific location against the previous two years.

## Features

### Main Dashboard
- **Treemap Visualization**: View a breakdown of tourist numbers by prefecture for the entire country, or by city within a selected prefecture.
- **Trend Analysis**: Analyze monthly tourist arrival trends with line charts grouped by major Japanese regions.
- **Interactive Filtering**: Select a specific month and year to view corresponding data.

### Year-on-Year Comparison
- **Detailed Comparison**: Select any prefecture or city to generate a comparative line chart.
- **Multi-Year View**: The chart displays data for the current year, the previous year, and the year before that, making it easy to spot trends.

## Data Source
- The data is sourced from the [Digital Tourism Statistics Open Data](https://www.nihon-kankou.or.jp/home/jigyou/research/d-toukei/) provided by the Japan Tourism Agency.
- The processed data is available on [GitHub](https://github.com/code4fukui/japan-kanko-stat) and consumed by this dashboard as a [CSV file](https://code4fukui.github.io/japan-kanko-stat/data/all.csv).

## License
MIT License — see [LICENSE](LICENSE).