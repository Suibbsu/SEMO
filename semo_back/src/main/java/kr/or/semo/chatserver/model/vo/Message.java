package kr.or.semo.chatserver.model.vo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Message {

	private int roomId; //그룹넘버
	private int memberNo; //보내는 사람 멤버 넘버
	private String senderName; //보내는 사람 이름
	private String message; //메세지
	private String chatTime; //날짜 시간

}
