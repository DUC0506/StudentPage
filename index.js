const allDropdown = document.querySelectorAll('#sidebar .side-dropdown') 
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item =>
  {
    const a=item.parentElement.querySelector('a:first-child');
    a.addEventListener('click',function (e)
    {
      e.preventDefault();
      this.classList.toggle('active')
      item.classList.toggle('show')
    })
  })

  //profile
  const profile=document.querySelector('nav .profile')
  const imgProfile=profile.querySelector('img')
  const dropdownProfile=profile.querySelector('.profile-link')
  imgProfile.addEventListener('click',function()
  {
    dropdownProfile.classList.toggle('show')
  })
  window.addEventListener('click',function(e)
  {
    if(e.target!==imgProfile)
    {
      if(e.target!==dropdownProfile)
      {
        if(dropdownProfile.classList.contains('show'))
        {
          dropdownProfile.classList.remove('show')
        }
      }
    }
    allMenu.forEach(item=>
      {
        const icon=item.querySelector('.icon');
        const menuLink=item.querySelector('.menu-link')
        if(e.target !== icon)
        {
          if(e.target !== menuLink)
          {
            if(menuLink.classList.contains('show'))
            {
              menuLink.classList.remove('show')
            }
          }
        }
  
      })
  })
  //progress
  const allProgress =document.querySelectorAll('main .card .progress')
  allProgress.forEach(item=>{
    item.style.setProperty('--value',item.dataset.value)
  })

  //apexcharts
  var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  //menu
  const allMenu=document.querySelectorAll('main .content-data .head .menu')
  allMenu.forEach(item=>
    {
      const icon=item.querySelector('.icon');
      const menuLink=item.querySelector('.menu-link')
      icon.addEventListener('click',function()
      {
        menuLink.classList.toggle('show');
      })

    })
  
    //hide menu in sidebar

const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
var options = {
  series: [44, 55, 13, 43],
  chart: {
  width: 500,
  type: 'pie',
},
labels: ['Academic', 'Non-academic', 'Administration', 'Others'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

let input = document.getElementById("inputTag");
                            let imageName = document.getElementById("imageName")
                    
                            input.addEventListener("change", ()=>{
                                let inputImage = document.querySelector("input[type=file]").files[0];
                    
                                imageName.innerText = inputImage.name;
                            })