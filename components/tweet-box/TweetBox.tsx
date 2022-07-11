import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';
import {useSession} from 'next-auth/react';
import React, {FC, useRef, useState} from 'react';
import {toast} from 'react-hot-toast';

import {fetchTweets} from '../../lib/fetchTweets';
import {Tweet, TweetBody} from '../../typings';
import {TweetBoxProps} from './typings';

const TweetBox: FC<TweetBoxProps> = ({setTweets}): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const {data: session} = useSession();
  const [imageUrlBoxOpen, setImageUrlBoxOpen] = useState<boolean>(false);
  const [image, setImage] = useState('');

  const imageInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    if (!imageInputRef.current?.value) {
      return;
    }
    setImage(imageInputRef.current?.value);
    imageInputRef.current.value = '';
    setImageUrlBoxOpen(false);
  };

  const postTweet = async () => {
    const tweetBody: TweetBody = {
      text: input,
      username: session?.user?.name ?? 'Unknown User',
      profileImg:
        session?.user?.image ??
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAJEBAJDQoNDQkJDRsICQ4KIB0iIiAdHx8kKDQsJCYxJx8fLTItMT1AMENDIys0QD82QTQ5MDcBCgoKDQ0OFQ8OFS0ZFRkrKzcrLS03Ny0rKys3Nys3LiwtKy0rKysrKzg3KzMrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQMCAwUFBgMECwEAAAABAgADBBEFIRIxQQYiUWFxBxMygZFCUnKhwdEjYrEUM1SUFjREU2OChJKT4fBD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAgMAAwEBAAAAAAAAAAECEQMxEiFBBBNRYSL/2gAMAwEAAhEDEQA/AOwcR8T9YRY+J+sEEohcR8T9YOI+JgggAyfODJ84IcYAQxABFAQARm5uFpjLHA8SZB1/WqdqmWI4nVuFeZJnJtU7S17rKtUZQhJWn5fKK3QdKu+2lpTBJdjgkcKjB4pltR9olTOaYpqu+xHG057cX+CePLcOdmG0rbp+MEqxUfynjGfnJ2rToi+02uuzpQdT0PdaOp7S+IYITI4sfZYeE41WZhuckZO6NwEGJNUgBgxIPPqVbzk7p6dt032mFcCoqvuctTOGHqJrtN7aWNcDFZEY5zTq9xlPznmqndk9Rnp0yI6uoMOpyPPpDysHjK9P09dtmcIK1uS22BUB70sgc8uXj0nlyz191OGJdW4SUckrmdB7F9v6lJ0o1TUq0KmAp+OpTPl4jylTP+lcXYomItbhaihkKsrYIdd1IjpE0QQYUWREkQAoUVBABSHeX8SwQ6XxL+JYJNMcEOFGAhQzCgAihChiAKAkfULxaFNqj8qYJxyJknluemfpOfe0LWw6m3pk5TJqHO/pC+gyXajXat3ULZHCvw0hsVX9Znbm85YwDsOPHdzI1zeqpKgYz8mLSLdXxA2biBG2O8w/WRtWjGpX7cqqKeWKiYOR4+cr0uMnAc43xnmImpdZBDZYb4Bbr5SEy75GcfUyV6O1apyc7enLMKiwDYPKoCGHTMbO/wC8Sc/SIaBjwkjng7GOs+Rn0jNXc+u8BbaMgNTeT7O9IwPQg9eKVRMeoHf0hYJXaPZr2vCOaFQkCqAQztxKHH7zsFKoGAYHIbkZ5R0m+NKqr+HMeU717MtZa5ouN+Gi78Jc94qSTy9MfnKwvxOU+tqYRioU0QTBiHBAAnxD1WCGnxD8QgiphBDhGAFBAYIyCLESIoQBm+z7p+EZPA2B8Q4pw3Ua68b5Y5JYEcjxTtus3XuqFV+qU2I6HinB7xgzMSAfiyTtIyVjNs1rBTO2fHION5T1XJ2yevnNE2n++ICDhyfsjgEtdM7GliMjbxM58s5HVhxWsOlm7HAGevnLG00aq23B9czqVp2UVAMBdsfWXFnoirgkCZ3kracEckp9l3IyQfpIVzoTgkYP6zun9gTlwr9JDuNIpncqM/nJ/ZT/AExwytpVTkFO3PbJJjFXTagGcHbmOs7Rc6GnQD6SuuNDXB2j/dR+jFxz+zsOYx67RagCdEv9AU52H0wZnL7QCucA7dOs0nLL2xy4LOlJQffPQTuHshuqRQimzkhF95TO3fz/AExOFVQykg7YPLlNH2U1mpbVFdCRggbbZWbY3XthlPj1HBKfs7qwuKKP3OIgcXAcqD69ZbcU2ZDghcUPMCGnMeqwQJzHqsEmmOEYqEZQJMEMwoEMRYiBFiMMZ7R9W93SWiA2bg99hsvBORVyWcBd+JgoXrnM6P7XKoVKYBXLMSF+0TiZHslp/vblCRkU8sQfHpMOStuKbXWgaFsGK+njNfaaeF6YkqjbquABykkCcnbv6mojm2HhEmniSmMacwVEV1jNSnJJjVWRVq+osi1Uk2qOcjOsmmqq9ESFUswektqqRnghE1zPttpHu2Woo2butjlmZ60q8OTn4d/AzrHaawFWgwxuBt13nKLm3KnHmQR5zr48tzTi5cdXbvPsu1LjtBlmJXqx4ptRXnKvZYGWgccmZsg7EGb1apm0yc/iuhWi1qynSvJCV4/IvFa0qm49VhyDQq95fVYI9lpaQjDhGWkRhQQRgYihECLEA5/7X7ENQp1cZNN1X/lOf/Uz/YRcPvjkPXE3PtGpBrF8/ZakR65mR7EWpJLdFxOfmdHB23IEMwwIsCcunaYfMZYmTSRGaiiHicqNGa0kMIw8Vi0YLmIq0o87gSJUuJOgi1VkVpNbeMOoHUQ8Rs0aeQQeoM5Zr9j7uu4PItkes64iZHlMX29scIKgH2sHxmuHphyzcaP2doRZrkcOS3Tdh4zVCZrsGhWxo55sHbf7uTNIpm7kLEWpiBFiIj9u/eX8Sw43Q+JfxL/WCPZNJEmKhGdDImCHCjARQiYoQCu7S2Pv7WtT5FqbFT/MN/0mY7FUsWyt1ct5TX3V/RXKVGA4gVJIJUfOZjs4nDaKP5rgDG/2iJz8tldPBjZ3Dmo6utPqMDmZS3XbGmg35HP0iNW05jknlvuxxgTIahbW6ktWrE8+WKan0mO46bKvqntBpA4KuB0PISzs+1aVMEbhses53T1CwBwo4t+RIzNTo3uHAKoBy5DgMnK/40wm/raU75XGxke7vAm56SVpenpw5HIyu7S0AF28D9JNvrap3pnNU7R94gdM+cobntZVG1Nc+qkxu9IVjnmZDF8ikAgnPQDmYsaWUv8AS6nbW5GAyYHiBiJbtS78uLzHOSV7S2SALUtq54lDAsmxXxhpcafWOUT3ZbBw68G0167jHW+qsOz3aQllRgxSpsX5lWll22o8Vo5+61M/nIdlYU1wy8JBwfFZba5T47SqB0RW+hB/STLDuN0udJpe7oUU/wB3SpL4b4k9TM3R1ooE94UHEF7ijJmipMCARyYAj0m2OUvTDPiyw908pixECLWNmeo/Ev4lghUT3l/EsECaSEYcIzpYiMKGYUAEUImGIBktec0rsKxLUbxeL3bd7hfyky1pCnSRVGyjYDbzj/auw97TRhs9CohVuvDmIcch4ATh5MbMq9XDKZ8eF+s/rlnVrjgUlV6nOAZnB2bqUEbHC9SpUpVReOOOsjA5A9JuLjI8T5chKy5JbqBM5dXa7jMpquUns1UWoWb3Qy6v1Y7evjNb2TsiKn8ud1zhQPSW76KXbJbO/QYlxp+lrTxjnC23s5jjjNRa2Ixy5dPSVvaRMg+ktUIUYldrI4lI8oXo5Pbk+q0+/npvvK+0t2FUNxL8WRxLyE0eoW3eIYemZA/soHy+ZxJl0eWOzX+ijMQwq8QClFFReNlXyOZLfs+gVFJP8EAKc4aTbBDyzUHodpd2ulBtyWP4jKueVRMMZ8UunWjIMA5A+RmgpjNJgfuMPliOPaBOUIEBW/C0mHWW1N+9jfJZAo9ZvrFSKdMHmqID64mQsbMVq9In4VQO3hxAzZpNuKd1n+XnNY4w8DFqY0DFqZq4T9M7j1WCJpnceoggTUQjFRJnSxEYUMwoAIYhQCARtV/uW8uE/nKymcgHbcDfpLuunErL95SPnKWmuNiMY2xynNzT3t2/jZf82BUQESquaO8uiR1lfesBnymNxdeFQqBwZZ09hkyge57wA3l1ad4b/ZAzmR/i7NHnTO8rrlvHzlrSvUBwd+UqNTqDJI2G+BKsmixvvTM6lRDOc48jy3lK3PHUGWWpaggfmNiBzwMyvvcHhYc3zxCZ1aRY9Dv89jNDaVZmrV87dZbW74jgqwuKmZFuD3H3xxKy59YGqZiHBbAG+WG0GdpXZ2iQWJGMAKvXaX6GQbGhwLjq258JNSdPHNTTh5cvLK08IoRAixKZnU5j1EEJDuPUQRE1ZhGGYRnQxJMEBgjAsQ4IIAqQNTX4T6gycDI+oplPwkfSRyTeNacN1lFNUqSh1i9I7oGS2wVd2Jl5UTnM9eMEqjqz8j4LOG16mFnaRpdififHEfs8wJaVqBKkKccW2ZHsqgI23P6ycolSej8/rOWOhNRqvVepVYufh94RTx6SN2idguVb1H2pp7gd0yiS14yeMHmdjsMSbPiplb7rA3FEMwJGSvItvJK5PP8AYS+1WwQNtwjnKx6QGwxIPZuiCDkSzpttK5CA2Cd9pZUl2J8Iuk+WzimWNjT69RK+l+0trQYWacfusOa6iSsdWNCOrOmOM4IsRAihAHEPL5QQhCiDYH94kwz+8IzoYChQEwgf19cwAQQZhZjBQgqJxAj7wMIRQiEulDVGCQeYyPnMx2kp/aHPB5c5r9Xo4YMOT8/xTP6hQDTg5MdXT1OLLclU2hWFVFZxUrEu3FwM3EvDLVbqp95zjO3wNJGnpgAeEk1rZW35HxEWNb7n1S3NzUBH94PxbiVmoak4U97fwzk5l/d8QB+E+eO9Ke4fmSq7yrppjpk7rUGPMVCfIZEhVLp98KQeg4stmXOocRyFAHFnnyAjFtaBd+Z8TIthZVVJRrkqzM2Sfh+yBNfajhognJL485XBB85Lq1hwqvhM9s6epNvLqjsAPIfWUFicuo8/yl6rTfi/rk5r8SQY4pkdTHFM2259JCtFgyOGjitGDwMOIBhwDYt+8SYtuvqYhpuwJMKGYUAEKHCgBiKBiYYjAq9IOpU8m69QZl69MqxQ81JHlLrXNctrGka1zVp00XPCGOajt4KOplMtyt0i10Dqtyi1UFQYcKRkZnN+RJqV1/i27sHTpeEfBjNCr9k7ESaiAzmjs8lfd08jpvKmtaD8/WaOtSGJXVkEVVMoz17bLjYCVdVMdJo7tPGUV4d/rtIqtocbqPE16mNpGB4jiCatNMPez64lutSUaV1pIXY4WkCzHn3ZMstQp1l4qbo45EockHzm/H05ebtbLVjq1JXq8cV5oxWC1I6ryvV46rw2FirwpFSpDj2ToTDn842Y6w3PqYgidLA2YUi32qUKO9WrSX+UtxP9BM1f+0OzpkqvvHYZwP7tTKktLbXxNR1UEsVUDmzngUCco1P2l3RyKS21Mb4qD+Kw+v7TH6n2huLjerWq1M7haj4Qegh4/wBDtN/2xsaOxrLUb7lsPfH68vzmI1r2oVXqGlZpTpgYBr1/49X5DkPznNtTvygFNCeNwC9TrjwjGjKd2OSTk5O5xH6Eja6fYvq94a169SslsAqUn7lP6CdUt6IVFVQAtMKoVRhQomC9mgH8QfyqZ0RB+efSeXllcrbXqY4zGSRDuaGdxsRyMYoXRU4bbHjyli6yNWog749Yt6VrYVr1T18d+khVKw8R1jd3pvFurOvp3hKe80+oP/1O2emIXIpjT2pXqAHfJmVur3JOD+sdv6bDYsT+UrxTJkXJeqQWLH9ZNtqUctbEnG0mm34ZOzkQtRpBqFZfv0qq+ecTllG9emcozqTjLUyUadV1FwlKox5JTqH5YnIHO86vx+q4/wAruNBZ9sbumce8FQeFdeP8+c0Vj2/TYVqNRf8AiUW94k52wjlPwPKdHjK5vKx2PT+0tpWwEr08/cqH3LZ+cukfr08eYxOCNT8NpYaXq9zQ3p1aqgfY4uKn9Iv1q/Y7irQTnundvnAAr0lfl/Eon3bfSCT+vI/ONprPtHvBUrUqdOgnuatanx7cWASPPwmbu+1N9WBD3FUL9xGyD/8AekEE7Z6c9UDXtRn79SqRuSThSRK+0ueOq+dweLHWCCLfuHo3qDEbcoWnguwzyXOfwwQSfo+IF5ULVWPiTLnTk/hnHPB/rCgk/LVTuN57PrgU6oB5VF4fnOp04IJ5kenl8CqJHIggjohmrSPTMpNSpVN9m+mYcEiqxrOVtPdiSVf5jMkWOjOx+FwPNd4IIpDtXtLSyoxwt/25MhXVg+SeGoRthQmwgglWRO6x3bKlWFFqaUrgmr8XBSL936TnlLRbpj/q17/4G/aCCdfBP+XF+Rbcgq6Hd52tb/5W7n9I7Q0C8P8Asuof5Z/2ggm87c6T/o7ef4TUD/0z/tG6fZy+z/qep/5VyP6QQR3sktezV9/gtU/yr/tBBBK2H//Z',
      image,
    };
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetBody),
      method: 'POST',
    });

    await result.json();

    const newTweets: Tweet[] = await fetchTweets();

    setTweets(newTweets);

    toast('Tweet Posted', {
      icon: '🚀',
    });

    return;
  };

  const handleTweetSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    postTweet();
    setInput('');
    setImage('');
    setImageUrlBoxOpen(false);
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src={session?.user?.image || 'https://links.papareact.com/gll'}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
                onClick={() => {
                  setImageUrlBoxOpen(!imageUrlBoxOpen);
                }}
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={input.length === 0 || !session}
              onClick={handleTweetSubmit}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40">
              Tweet
            </button>
          </div>
          {imageUrlBoxOpen ? (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter image URL ..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white">
                Add image
              </button>
            </form>
          ) : null}
          {image ? (
            <img
              src={image}
              className="mt-10 h-40 w-full rounded-xl shadow-lg"
              alt=""
            />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
