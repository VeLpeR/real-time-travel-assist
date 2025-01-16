import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-feed',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home-feed.component.html',
  styleUrl: './home-feed.component.scss'
})
export class HomeFeedComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  isSearchExpanded = false;
  isPostModalOpen = false;
  searchQuery = '';
  
  newPost = {
    title: '',
    location: '',
    description: ''
  };

  isFilterModalOpen = false;
  activeFilters = 0;
  
  categories = [
    { label: 'Transport', value: 'transport', checked: false },
    { label: 'Safety', value: 'safety', checked: false },
    { label: 'Food', value: 'food', checked: false },
    { label: 'Lodging', value: 'lodging', checked: false },
    { label: 'Sightseeing', value: 'sightseeing', checked: false }
  ];

  filters = {
    range: '',
    timeFrame: '',
  };

  toggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
    if (!this.isSearchExpanded) {
      // Clear search when closing
      this.searchQuery = '';
    } else {
      // Focus the input when opening
      setTimeout(() => {
        this.searchInput?.nativeElement?.focus();
      });
    }
  }

  onSearch() {
    // Implement search logic here
    console.log('Searching for:', this.searchQuery);
  }

  openPostModal() {
    this.isPostModalOpen = true;
  }

  closePostModal() {
    this.isPostModalOpen = false;
    // Reset form
    this.newPost = {
      title: '',
      location: '',
      description: ''
    };
  }

  submitPost() {
    // Implement post submission logic here
    console.log('Submitting post:', this.newPost);
    this.closePostModal();
  }

  toggleFilterModal() {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  resetFilters() {
    this.filters = {
      range: '',
      timeFrame: '',
    };
    this.categories.forEach(cat => cat.checked = false);
    this.updateActiveFiltersCount();
  }

  applyFilters() {
    this.updateActiveFiltersCount();
    // Implement your filter logic here
    console.log('Applied filters:', {
      ...this.filters,
      categories: this.categories.filter(cat => cat.checked).map(cat => cat.value)
    });
    this.closeFilterModal();
  }

  private updateActiveFiltersCount() {
    this.activeFilters = 
      (this.filters.range ? 1 : 0) +
      (this.filters.timeFrame ? 1 : 0) +
      this.categories.filter(cat => cat.checked).length;
  }
}
