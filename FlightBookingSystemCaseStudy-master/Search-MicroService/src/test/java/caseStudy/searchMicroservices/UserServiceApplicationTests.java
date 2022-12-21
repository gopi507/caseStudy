package caseStudy.searchMicroservices;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import caseStudy.searchMicroservices.dao.AdminRepository;
import caseStudy.searchMicroservices.entity.FlightDetails;
import caseStudy.searchMicroservices.service.AdminService;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceApplicationTests 
{
	@Autowired
	private AdminService adminService;
	
	@MockBean
	private AdminRepository adminRepository;
	

	@Test
	@DisplayName("Testing whether flight details database is empty")
	public void getAllDetailsTest1() {
		List<FlightDetails> details = adminService.getAllDetails();
		assertTrue(details.isEmpty());
	}
	
	@Test
	public void getAllDetailsTest() {
		when(adminRepository.findAll()).thenReturn(Stream
				.of(new FlightDetails(102,"mumbai","pune","5 pm","4:45 pm","15 min",300,1200,2200,3200,"20-may-2022"),
						new FlightDetails(103,"delhi","kolkata","7 pm","6 pm","1 hour",300,1500,2500,3500,"20-may-2022"))
				.collect(Collectors.toList()));
		assertEquals(2,adminService.getAllDetails().size());
	}

	
}