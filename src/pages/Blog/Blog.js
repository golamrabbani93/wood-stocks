import React from 'react';

const Blog = () => {
	return (
		<div className="mt-5 container mx-auto mb-10">
			<h2 className=" text-center text-2xl md:text-5xl py-6 font-bold">All 4 Questios</h2>
			<div
				tabIndex={0}
				className="collapse collapse-arrow  m-5  border border-primary mt-5 bg-base-300 rounded-box"
			>
				<div className="collapse-title text-xl font-medium ">
					Questions: What are the different ways to manage a state in a React application?
				</div>
				<div className="collapse-content text-xl font-bold">
					<p>
						Ans:- The Four Kinds of React State to Manage Local state. Global state. Server state.
						URL state
					</p>
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow  m-5  border border-primary mt-5 bg-base-300 rounded-box"
			>
				<div className="collapse-title text-xl font-medium ">
					Questions: How does prototypical inheritance work?
				</div>
				<div className="collapse-content text-xl font-bold">
					<p>
						Ans:- The Prototypal Inheritance is a feature in javascript used to add methods and
						properties in objects. It is a method by which an object can inherit the properties and
						methods of another object. Traditionally, in order to get and set the [[Prototype]] of
						an object, we use Object. getPrototypeOf and Object.
					</p>
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow  m-5  border border-primary mt-5 bg-base-300 rounded-box"
			>
				<div className="collapse-title text-xl font-medium ">
					Questions: What is a unit test? Why should we write unit tests?
				</div>
				<div className="collapse-content text-xl font-bold">
					<p>
						The main objective of unit testing is to isolate written code to test and determine if
						it works as intended. Unit testing is an important step in the development process,
						because if done correctly, it can help detect early flaws in code which may be more
						difficult to find in later testing stages.
					</p>
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow  m-5  border border-primary mt-5 bg-base-300 rounded-box"
			>
				<div className="collapse-title text-xl font-medium ">
					Questions: React vs. Angular vs. Vue?
				</div>
				<div className="collapse-content text-xl font-bold">
					<p>
						Ans:- Vue provides higher customizability and hence is easier to learn than Angular or
						React. Further, Vue has an overlap with Angular and React with respect to their
						functionality like the use of components. Hence, the transition to Vue from either of
						the two is an easy option.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
