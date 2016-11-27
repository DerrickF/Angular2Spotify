import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Album } from '../../../album'
import { Artist } from '../../../artist'
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'album',
    templateUrl: './album.component.html',
})
export class AlbumComponent {
    id: string;
    artist: Artist[];
    album: Album[];
    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute){

        }

        ngOnInit(){
        this._route.params.map(params => params['id']).subscribe((id) =>{
            this._spotifyService.getAlbum(id)
            .subscribe(album => {
                this.album = album;
            })
            
        })

      
    }
}
