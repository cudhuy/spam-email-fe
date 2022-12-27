import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	SidebarContainer,
	ComposeButton,
	ComposeImg,
	SideNavContainer,
	ListImg,
	SideNavList,
	// Meet,
	// MeetText,
	// Hangout,
	// HangoutFlex,
	// HangoutText,
	// CapitalT,
	// HangoutName,
	// HangoutCross,
	// HangoutArrow,
} from './sidebar.styles';

const SideBar = ({ shouldMessageShow }) => {
	const [hightlight, setHighlight] = useState('inbox');

	const handleClick = () => {
		shouldMessageShow(false);
	};
	return (
		<SidebarContainer className='sidebar'>
			<div className='compose'>
				<ComposeButton onClick={handleClick}>
					<ComposeImg />
					<div>Soạn thư</div>
				</ComposeButton>
			</div>
			<div>
				<SideNavContainer>
					<Link to='/'>
						<SideNavList
							className={hightlight === 'inbox' ? 'red-highlight' : ''}
							onClick={() => setHighlight('inbox')}
						>
							<span className='icon'>
								{hightlight === 'inbox' ? (
									<img
										src='https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png'
										alt='img'
									/>
								) : (
									<ListImg
										src='https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png'
										alt='inbox'
									/>
								)}
							</span>
							<span className='title'>hộp thư đến</span>
							<span className='number'>69</span>
						</SideNavList>
					</Link>
					<Link to='/starred'>
						<SideNavList
							className={hightlight === 'starred' ? 'highlight' : ''}
							onClick={() => setHighlight('starred')}
						>
							<span>
								<ListImg
									src='https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png'
									alt='inbox'
								/>
							</span>
							<span className='title'>Có gắn dấu sao</span>
						</SideNavList>
					</Link>

					{/* <SideNavList
						className={hightlight === 'snoozed' ? 'highlight' : ''}
						onClick={() => setHighlight('snoozed')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Đã tạm ẩn</span>
					</SideNavList> */}

					<Link to='/sent'>
						<SideNavList
							className={hightlight === 'sent' ? 'highlight' : ''}
							onClick={() => setHighlight('sent')}
						>
							<span>
								<ListImg
									src='https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png'
									alt='inbox'
								/>
							</span>
							<span className='title'>Thư spam</span>
						</SideNavList>
					</Link>

					{/* <SideNavList
						className={hightlight === 'drafts' ? 'highlight' : ''}
						onClick={() => setHighlight('drafts')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Dự thảo</span>
						<span className='number'>15</span>
					</SideNavList> */}

					{/* <SideNavList
						className={hightlight === 'important' ? 'highlight' : ''}
						onClick={() => setHighlight('important')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Quan trọng</span>
					</SideNavList> */}

					{/* <SideNavList
						className={hightlight === 'chats' ? 'highlight' : ''}
						onClick={() => setHighlight('chats')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Trò chuyện</span>
					</SideNavList> */}

					{/* <SideNavList
						className={hightlight === 'scheduled' ? 'highlight' : ''}
						onClick={() => setHighlight('scheduled')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/schedule_send_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Đã lên lịch</span>
					</SideNavList> */}

					{/* <SideNavList
						className={hightlight === 'all-mail' ? 'highlight' : ''}
						onClick={() => setHighlight('all-mail')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Tất cả thư</span>
					</SideNavList> */}

					<SideNavList
						className={hightlight === 'spam' ? 'highlight' : ''}
						onClick={() => setHighlight('spam')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Đã gửi</span>
						<span className='number'>2</span>
					</SideNavList>

					<SideNavList
						className={hightlight === 'trash' ? 'highlight' : ''}
						onClick={() => setHighlight('trash')}
					>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Thùng rác</span>
					</SideNavList>

					{/* <SideNavList>
            <span className="icon">
              <ListImg
                src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Create new label</span>
          </SideNavList> */}

					{/* <SideNavList
						className={hightlight === 'manage-label' ? 'highlight' : ''}
						onClick={() => setHighlight('manage-label')}
					>
						<span className='icon manage-icon'>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/settings_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Quản lí nhãn</span>
					</SideNavList>

					<SideNavList>
						<span>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/add_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Tạo nhãn mới</span>
					</SideNavList> */}
				</SideNavContainer>
			</div>
			{/* <Meet className='meet'>
				<MeetText>Cuộc họp</MeetText>
				<ul>
					<SideNavList>
						<span className='icon'>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/videocam_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Cuộc họp mới</span>
					</SideNavList>
					<SideNavList>
						<span className='icon'>
							<ListImg
								src='https://www.gstatic.com/images/icons/material/system/1x/keyboard_black_20dp.png'
								alt='inbox'
							/>
						</span>
						<span className='title'>Tham gia cuộc họp</span>
					</SideNavList>
				</ul>
			</Meet>
			<Hangout>
				<HangoutText>Google Hangouts</HangoutText>
				<HangoutFlex>
					<CapitalT>
						<div>T</div>
					</CapitalT>
					<HangoutName>TranHuy</HangoutName>
					<HangoutArrow>
						<i className='fas fa-sort-down'></i>
					</HangoutArrow>
					<HangoutCross>
						<img
							src='https://www.gstatic.com/images/icons/material/system/1x/add_grey600_24dp.png'
							alt='icon'
						/>
					</HangoutCross>
				</HangoutFlex>
			</Hangout> */}
		</SidebarContainer>
	);
};

export default SideBar;
