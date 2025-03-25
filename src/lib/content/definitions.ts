//* This file contains only prototypes of interfaces and types for the feed.

type Type = 'course' | 'book' | 'video' | 'article' | 'other';
type Level = 'beginner' | 'intermediate' | 'advanced';
type Category =
	| 'frontend'
	| 'backend'
	| 'fullstack'
	| 'devops'
	| 'mobile'
	| 'other';

interface UserData {
	userId: string;
	preferences: {
		topics: string[];
		levels: string[];
		types: string[];
	};
}

interface Course {
	id: string;
	title: string;
	description: string;
	level: 'beginner' | 'intermediate' | 'advanced';
	type: 'course' | 'book' | 'video' | 'article' | 'other';
	url: string;
	topic: string;
	category:
		| 'frontend'
		| 'backend'
		| 'fullstack'
		| 'devops'
		| 'mobile'
		| 'other';
}

interface Node {
	id: string;
	topic: string;
	description: string;
	level: Level;
	type: Type;
	category: Category;
	children: Node[];
}
interface RootNode extends Node {
	logo: string;
}
interface Edge {
	from: Node;
	to: Node;
}
interface Tree {
	root: RootNode;
	edges: Edge[];
}

interface Graph {
	nodes: Node[];
	edges: Edge[];
}
