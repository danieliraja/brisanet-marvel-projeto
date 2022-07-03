import { Comic } from './../../shared/interfaces/comic.interface';
import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/shared/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicService: ComicsService) {
  }

  comics!: Comic[];

  ngOnInit(): void {
    this.comicService.getOne().subscribe(comic => {
      console.log(comic.data.results);
      this.comics = comic.data.results;
    })
  }

}
