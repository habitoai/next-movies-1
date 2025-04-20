import AdSectionWrapper from 'parts/AdSectionWrapper';
import Website from 'parts/Website';
import Imdb from 'parts/Imdb';
import Trailer from './Trailer';
import Download from './Download';

const MovieAdSection = ({
  websiteUrl,
  imdbId,
  videos,
  movieId
}) => (
  <>
    <div className="prominent-download">
      <Download id={movieId} />
    </div>
    <AdSectionWrapper>
      <Website href={websiteUrl} />
      <Imdb id={imdbId} />
      <Trailer videos={videos} />
    </AdSectionWrapper>
    <style jsx>{`
      .prominent-download {
        margin-bottom: 2rem;
        display: flex;
        justify-content: flex-start;
      }
    `}</style>
  </>
);

export default MovieAdSection;
