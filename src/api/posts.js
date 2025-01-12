// axios
const posts = [
	{ id: 1, title: '제목 1', contents: '내용 1', createAt: '2025-01-01' },
	{ id: 2, title: '제목 2', contents: '내용 2', createAt: '2025-02-02' },
	{ id: 3, title: '제목 3', contents: '내용 3', createAt: '2025-03-03' },
	{ id: 4, title: '제목 4', contents: '내용 4', createAt: '2025-04-04' },
	{ id: 5, title: '제목 5', contents: '내용 5', createAt: '2025-05-05' },
];

export function getPosts() {
	return posts;
}
