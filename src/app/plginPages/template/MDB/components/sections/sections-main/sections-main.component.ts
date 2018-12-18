import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sections-main',
  templateUrl: './sections-main.component.html',
  styleUrls: ['./sections-main.component.scss']
})
export class SectionsMainComponent implements DoCheck, OnInit {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Blog Section', description: 'On this page you will find basic examples of Angular Blog Sections', link: '/MDB/sections/blog' },
    { id: 2, name: 'Contact Section', description: 'On this page you will find basic examples of Angular Contact Sections', link: '/MDB/sections/contact' },
    { id: 3, name: 'E-commerce Section', description: 'On this page you will find basic examples of Angular E-commerce Sections', link: '/MDB/sections/e-commerce' },
    { id: 4, name: 'Features Section', description: 'On this page you will find basic examples of Angular Features Sections', link: '/MDB/sections/features' },
    { id: 6, name: 'Magazine Section', description: 'On this page you will find basic examples of Angular Magazine Sections', link: '/MDB/sections/magazine' },
    { id: 7, name: 'Projects Section', description: 'On this page you will find basic examples of Angular Projects Sections', link: '/MDB/sections/projects' },
    { id: 8, name: 'Social Section', description: 'On this page you will find basic examples of Angular Social Sections', link: '/MDB/sections/social' },
    { id: 9, name: 'Team Section', description: 'On this page you will find basic examples of Angular Team Sections', link: '/MDB/sections/team' },
    { id: 10, name: 'Testimonials Section', description: 'On this page you will find basic examples of Angular Testimonials Sections', link: '/MDB/sections/testimonials' }
  ];

  introsArray = [
    { id: 1, name: 'App Intro', description: 'On this page you will find Angular App Intro', link: '/MDB/sections/intros/app' },
    { id: 2, name: 'Contact Form Intro', description: 'On this page you will find Angular Contact Form Intro', link: '/MDB/sections/intros/contact' },
    { id: 3, name: 'CTA Intro', description: 'On this page you will find Angular CTA Intro', link: '/MDB/sections/intros/cta' },
    { id: 4, name: 'Parallax Effect Intro', description: 'On this page you will find Angular Parallax Effect Intro', link: '/MDB/sections/intros/parallax' },
    { id: 5, name: 'Classic Form Intro', description: 'On this page you will find Angular Classic Form Intro', link: '/MDB/sections/intros/classic' },
    { id: 6, name: 'Video Intro', description: 'On this page you will find Angular Video Intro', link: '/MDB/sections/intros/video' },
    { id: 7, name: 'Minimalistic Form Intro', description: 'On this page you will find Angular Minimalistic Form Intro', link: '/MDB/sections/intros/minimalistic' }
  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

  ngOnInit() {
  }

}
