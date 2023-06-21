import css from './Statistics.module.css';
import getRandomColor from 'color/getRandomColor';
import PropTypes from 'prop-types';


  export const Statistics = ({ title, stats}) =>{
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statList}>
          {stats.map(statElem => (
            <li
              style={{
                backgroundColor: getRandomColor(),
                width: `calc(100% / ${stats.length})`,
              }}
              key={statElem.id}
              className={css.item}
            >
              <span className={css.label}>{statElem.label}</span>
              <span className={css.percentage}>{statElem.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    )
  };

  Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
  };