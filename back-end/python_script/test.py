from pytube import YouTube
import os
import ssl


try:
    _create_unverified_https_context = ssl._create_unverified_context
    url= "https://www.youtube.com/watch?v=HEg6ImFCYGo&ab_channel=NotMarriedFilms"
    yt = YouTube(url)
    print("..Downloading "+yt.title)
    YouTube('https://youtu.be/9bZkp7q19f0').streams.first().download()
    yt = YouTube('http://youtube.com/watch?v=9bZkp7q19f0')
    output_path = yt.streams.filter(only_audio=True).first().download()
    new_name = os.path.splitext(output_path)
    os.rename(output_path,new_name[0]+'.mp3')
    print("Completed...")
    
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context



