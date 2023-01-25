// @ts-check

/**
 * Todo Type
 * @typedef {Object} TodoType
 * @property {number} postId - 아이디 (required)
 * @property {string} content - 내용 (required)
 * @property {string} category - 카테고리 (required)
 * @property {string[]} [tags] - 태그들 (optional)
 * @property {boolean} isComplete - 완료여부 (required)
 */

/** @type {TodoType} */
const fakeTodo = {
  postId: 1,
  content: '프리온보딩 프론트엔드 챌린지 2월',
  category: 'typescript',
  tags: [],
  isComplete: false,
};

/**
 * Todo List Type
 * @typedef {Array<TodoType>} TodoListType
 * @property {TodoType} todo - 할 일 (required)
 */

/** @type {TodoListType} */
const fakeTodoList = [fakeTodo];

/**
 * - 할 일을 추가 한다
 * - 내용없이 추가할 수 없다
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string} tags - 태그들
 */
const onCreate = (content, category, tags) => {};

/**
 * - 모든 할 일을 조회할 수 있다.
 * @returns {TodoListType}
 */
const onRead = () => {
  // api call ...
  return fakeTodoList;
};

/**
 * - ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 아이디
 * @returns {TodoType}
 */
const onReadById = (id) => {
  // api call ... By id
  return fakeTodo;
};

/**
 * - ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {TodoType} todo - 할 일
 */
const onUpdateTodo = (todo) => {};

/**
 * - 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} id - 아이디
 * @param {string[]} tags - 태그들
 */
const onUpdateTags = (id, tags) => {};

/**
 * - ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 아이디
 */
const onRemoveById = (id) => {};

/**
 * - 모든 할 일을 제거할 수 있다.
 */
const onRemoveAll = () => {};

/**
 * - 특정 할 일의 특정 태그를 삭제할 수 있다.
 * - 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - 아이디
 * @param {string[]} tags - 태그들
 */
const onRemoveTags = (id, tags) => {};
