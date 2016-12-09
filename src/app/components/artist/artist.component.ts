import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Album } from '../../../album'
import { Artist } from '../../../artist'
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'artist',
    templateUrl: './artist.component.html',
    
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];
    relatedArtists: Artist[];
    constructor(private _spotifyService: SpotifyService,
                private _route: ActivatedRoute){

    }
    ngOnInit(){
        this._route.params.map(params => params['id']).subscribe((id) =>{
            
            this._spotifyService.getArtist(id)
            .subscribe(artist => {
                this.artist = artist;
            })

             this._spotifyService.getAlbums(id)
             .subscribe(albums => {
                this.albums = albums.items;
            })

            this._spotifyService.getRelatedArtists(id)
             .subscribe(relatedArtists => {
                this.relatedArtists = relatedArtists.artists;
                console.log("related artists: ", relatedArtists);    
        })

            

        })

      
    }
}
