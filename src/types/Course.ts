export interface Chapter {
	id: number;
	chapter_name: string;
	lessons: string[];
}

export interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
	courseContent: Chapter[];
}
