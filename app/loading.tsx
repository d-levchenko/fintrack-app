import css from './Home.module.scss';

const Loading = () => {
  return (
    <div className={css.loadingCenter}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Loading;
