# Japan Kanko Dashboard

A web-based dashboard for visualizing tourist visit statistics across Japan, by prefecture and municipality. This project provides interactive charts and data visualizations to help users explore trends in tourism data.

## Live Demo

- [Tourist Dashboard (観光者数ダッシュボード)](https://code4fukui.github.io/japan-kanko-dashboard/)
- [Year-on-Year Comparison (観光者数 前年比)](https://code4fukui.github.io/japan-kanko-dashboard/compprev.html)

## Features

- Interactive treemap and line charts of tourist visits by region, prefecture, and city
- Year-on-year comparison of visitor numbers
- Data selection by region, prefecture, city, and month
- Uses open data sources for up-to-date statistics
- Fully client-side, no backend required

## Data Sources

- [Japan Kanko Stat: Tourist Visits by Prefecture/City](https://github.com/code4fukui/japan-kanko-stat)
- [Digital Tourism Statistics Open Data (日本観光振興協会)](https://www.nihon-kankou.or.jp/home/jigyou/research/d-toukei/)
- [Local Government Codes](https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv)
- [Region Classification (統計局ホームページ/地域区分)](https://www.stat.go.jp/data/shugyou/1997/3-1.html)

## Technology Stack

- HTML, JavaScript (ES Modules)
- [ApexCharts.js](https://apexcharts.com/) for data visualization
- [js.sabae.cc](https://js.sabae.cc/) utility modules (CSV, ArrayUtil, Num, etc.)
- No build tools or frameworks required

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser to view the dashboard.
3. Open `compprev.html` for year-on-year comparison charts.

No server setup is required. All data is loaded from public sources via HTTP.

## File Structure

- `index.html` — Main dashboard UI and logic
- `compprev.html` — Year-on-year comparison tool
- `JAPAN_AREA.js` — Region and prefecture definitions
- `README.md` — Japanese project overview
- `README.en.md` — This English README
- `LICENSE` — MIT License

## Contributing

Contributions are welcome! Please open issues or pull requests on [GitHub](https://github.com/code4fukui/japan-kanko-dashboard).

## License

MIT License. See [LICENSE](LICENSE) for details.

## Author

Taisuke Fukuno ([GitHub](https://github.com/code4fukui))
