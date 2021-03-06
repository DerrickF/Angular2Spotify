import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../artist'

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    providers: [SpotifyService]
})
export class SearchComponent {
    searchStr: string;
    searchRes: Artist[];

    constructor(private _spotifyService: SpotifyService) {

    }

    searchMusic() {
        if (this.searchStr.length > 3) {
            this._spotifyService.searchMusic(this.searchStr)
                .subscribe(res => {
                    this.searchRes = res.artists.items;
                })
        }
        else{
            this.searchRes = null;
        }
    }
}
