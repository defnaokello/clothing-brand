import { motion } from 'framer-motion';

const tops = [
  { size: 'XS', chest: '86–90', waist: '70–74', hip: '88–92' },
  { size: 'S', chest: '90–94', waist: '74–78', hip: '92–96' },
  { size: 'M', chest: '94–100', waist: '78–84', hip: '96–102' },
  { size: 'L', chest: '100–106', waist: '84–90', hip: '102–108' },
  { size: 'XL', chest: '106–112', waist: '90–96', hip: '108–114' },
];

const bottoms = [
  { size: '24', waist: '61–63', hip: '86–88' },
  { size: '26', waist: '66–68', hip: '91–93' },
  { size: '28', waist: '71–73', hip: '96–98' },
  { size: '30', waist: '76–78', hip: '101–103' },
  { size: '32', waist: '81–83', hip: '106–108' },
];

export default function SizeGuide() {
  return (
    <motion.main
      className="content-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <header className="content-page__header">
          <span className="eyebrow">Fit & Sizing</span>
          <h1>Size Guide</h1>
          <p>All measurements in centimetres. If you’re between sizes, we recommend sizing up.</p>
        </header>

        <div className="content-page__body">
          <h2>Tops, Knitwear & Outerwear</h2>
          <table className="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              {tops.map((row) => (
                <tr key={row.size}>
                  <td><strong>{row.size}</strong></td>
                  <td>{row.chest}</td>
                  <td>{row.waist}</td>
                  <td>{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Trousers & Bottoms</h2>
          <table className="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              {bottoms.map((row) => (
                <tr key={row.size}>
                  <td><strong>{row.size}</strong></td>
                  <td>{row.waist}</td>
                  <td>{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>How to Measure</h2>
          <ul>
            <li><strong>Chest</strong> — measure around the fullest part of your chest</li>
            <li><strong>Waist</strong> — measure around your natural waistline</li>
            <li><strong>Hip</strong> — measure around the fullest part of your hips</li>
          </ul>

          <h2>Fit Notes</h2>
          <p>
            Our garments are cut for a relaxed, modern silhouette. If you prefer
            a closer fit, consider sizing down. Still unsure? Email us at{' '}
            <strong>hello@atelier.com</strong> and we’ll help.
          </p>
        </div>
      </div>
    </motion.main>
  );
}