import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';
import {
	PostListWrapper,
	PostPreview,
	PostDetails,
	PostTitle,
	PostMeta,
	PostDate,
	PostTags,
} from './post-list.style';

interface PostListProps {
	image?: any;
	title: string;
	url: string;
	date?: string;
	tags?: [];
	className?: string;
	placeholderBG?: string;
}

const PostList: React.FunctionComponent<PostListProps> = ({
	image,
	title,
	url,
	date,
	tags,
	className,
	placeholderBG,
	...props
}) => {
	// Add all class to an array
	const addAllClasses = ['post_list'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<PostListWrapper className={addAllClasses.join(' ')} {...props}>
			<Link to={url}>
				{image == null ? null : (
					<PostPreview className='post_preview'>
            <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} />
					</PostPreview>
				)}

				<PostDetails>
					<PostTitle className='post_title'>{title}</PostTitle>
					<PostMeta>
						{date && (
							<PostDate
								dangerouslySetInnerHTML={{
									__html: date,
								}}
								className='post_date'
							/>
						)}
						{tags == null ? null : (
							<PostTags className='post_tags'>
								{tags.map((tag: string, index: number) => (
									<span key={index}>{`#${tag}`}</span>
								))}
							</PostTags>
						)}
					</PostMeta>
				</PostDetails>
			</Link>
		</PostListWrapper>
	);
};

export default PostList;
